Name:           zigzag-plasma
Version:        0
Release:        0
License:        GPL-3.0
Group:          System/GUI/KDE
Summary:        Default configuration for plasma desktop

URL:            http://github.com/zigzag-linux
Source0:        %{name}-%{version}.tar.gz
Conflicts:      plasma5-defaults-openSUSE
BuildArch:      noarch
BuildRequires:  kf5-filesystem

%prep
%autosetup

%description
Configuration files for Plasma Desktop install in Zigzag Linux

%build

%install
install -d %{buildroot}
cp -a zigzag-plasma/* %{buildroot}

%files
%doc LICENSE
%dir %{_sysconfdir}/skel/.config
%dir %{_sysconfdir}/skel/.config/gtk-3.0
%config %{_sysconfdir}/skel/.config/gtk-3.0/settings.ini
%config %{_kf5_configdir}/*
%dir %{_datadir}/icons/default/
%{_datadir}/icons/default/index.theme

%changelog
